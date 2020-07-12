﻿using LiveWallpaperCore.LocalServer;
using NLog;
using System;
using System.Drawing;
using System.Net;
using System.Net.Sockets;
using System.Reflection;
using System.Threading;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace LiveWallpaperCore
{
    public class AppContext : ApplicationContext
    {
        #region ui
        private NotifyIcon _notifyIcon;
        private ContextMenuStrip _contextMenu;
        private ToolStripMenuItem _btnMainUI;
        private ToolStripMenuItem _btnExit;
        private System.ComponentModel.IContainer _components;
        #endregion
        private static readonly Logger _logger = LogManager.GetCurrentClassLogger();
        private static Mutex _mutex;

        public AppContext()
        {
            InitializeAppContextComponent();
            CheckMutex();
        }

        private void CheckMutex()
        {
            try
            {
                _mutex = new Mutex(true, "Livewallpaper", out bool ret);

                if (!ret)
                {
                    _notifyIcon.ShowBalloonTip(5, "提示", "已有一个实例启动，请查看右下角托盘", ToolTipIcon.Warning);
                    Environment.Exit(0);
                    return;
                }
            }
            catch (Exception ex)
            {
                _logger.Error(ex);
            }
            finally
            {
                _mutex.ReleaseMutex();
            }
        }

        private void InitializeAppContextComponent()
        {
            _components = new System.ComponentModel.Container();
            _contextMenu = new ContextMenuStrip();

            _btnMainUI = new ToolStripMenuItem()
            {
                Text = "主界面"
            };
            _btnMainUI.Click += BtnMainUI_Click;
            _contextMenu.Items.Add(_btnMainUI);

            _btnExit = new ToolStripMenuItem
            {
                Text = "退出",
            };
            _btnExit.Click += BtnExit_Click;
            _contextMenu.Items.Add(_btnExit);

            _notifyIcon = new NotifyIcon(_components)
            {
                Icon = Icon.ExtractAssociatedIcon(Assembly.GetExecutingAssembly().Location),
                ContextMenuStrip = _contextMenu,
                Text = "巨应壁纸",
                Visible = true
            };

            _notifyIcon.MouseClick += new MouseEventHandler(NotifyIcon_MouseClick);

            Task.Run(() =>
              {
                  int port = GetPort();
                  string url = $"http://localhost:{port}/";
                  ServerWrapper.Start($"--urls={url}");
              });
        }

        /// <summary>
        /// 获取可用端口
        /// </summary>
        /// <returns></returns>
        static int GetPort()
        {
            TcpListener l = new TcpListener(IPAddress.Loopback, 0);
            l.Start();
            int port = ((IPEndPoint)l.LocalEndpoint).Port;
            l.Stop();
            return port;
        }

        private void BtnMainUI_Click(object sender, EventArgs e)
        {

        }

        private void NotifyIcon_MouseClick(object sender, MouseEventArgs e)
        {
            if (e.Button == MouseButtons.Left)
            {
                MethodInfo mi = typeof(NotifyIcon).GetMethod("ShowContextMenu",
                 BindingFlags.Instance | BindingFlags.NonPublic);
                mi.Invoke(_notifyIcon, null);
            }
        }

        private void BtnExit_Click(object Sender, EventArgs e)
        {
            _notifyIcon.Icon.Dispose();
            _notifyIcon.Dispose();
            Application.Exit();
        }
    }
}
