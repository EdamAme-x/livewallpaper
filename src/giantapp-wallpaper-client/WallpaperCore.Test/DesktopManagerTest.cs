﻿using System.Diagnostics;
using System.Runtime.InteropServices;
using WallpaperCore.Libs;

namespace WallpaperCore.Test;

[TestClass]
public class DesktopManagerTest
{
    [TestMethod]
    public void TestGetWorkerW()
    {
        //kill all explorer
        var processes = Process.GetProcessesByName("explorer");
        foreach (var process in processes)
        {
            process.Kill();
        }
        //start explorer and wait
        Process.Start("explorer");
        Thread.Sleep(3000);

        var res = DeskTopHelper.GetWorkerW();
        Assert.IsTrue(res != IntPtr.Zero);
    }

    [TestMethod]
    public void TestSendHandleToDesktopBottom()
    {
        var p = Process.Start("TestWallpapers\\TestExeWallpaper.exe");
        while (p.MainWindowHandle == IntPtr.Zero)
        {
            Thread.Sleep(100);
        }
        var handler = p.MainWindowHandle;

        var res = DeskTopHelper.SendHandleToDesktopBottom(handler, WallpaperApi.GetScreen(0)?.Bounds);
        Assert.IsTrue(res);
        Thread.Sleep(5000);
        p.Kill();
        DeskTopHelper.CreateWorkerW();//刷新背景
    }
}
