﻿using NLog;

namespace WallpaperCore;

public static class WallpaperApi
{
    #region properties

    //支持的视频格式
    public static string[] SupportedVideoFormats { get; } = new string[] { ".gif", ".mp4", ".webm", ".mkv", ".avi", ".wmv", ".mov", ".flv" };

    //支持的图片格式
    public static string[] SupportedImageFormats { get; } = new string[] { ".jpg", ".png", ".jpeg", ".bmp" };

    //支持的应用程序格式
    public static string[] SupportedApplicationFormats { get; } = new string[] { ".exe" };

    //支持的网页格式
    public static string[] SupportedWebFormats { get; } = new string[] { ".html", ".htm" };

    public static Logger Logger { get; } = LogManager.GetCurrentClassLogger();

    #endregion

    #region events

    #endregion

    #region public method

    //一次性获取目录内的壁纸
    public static Wallpaper[] GetWallpapers(params string[] directories)
    {
        var wallpapers = new List<Wallpaper>();
        foreach (var directory in directories)
        {
            wallpapers.AddRange(EnumerateWallpapersAsync(directory));
        }

        return wallpapers.ToArray();
    }

    //枚举目录内的壁纸
    public static IEnumerable<Wallpaper> EnumerateWallpapersAsync(string directory)
    {
        //目录不存在
        if (!Directory.Exists(directory))
            yield break;

        // 遍历目录文件，筛选壁纸
        foreach (var file in Directory.EnumerateFiles(directory, "*", SearchOption.AllDirectories))
        {
            var fileInfo = new FileInfo(file);

            // 符合支持格式的
            if (IsSupportedFile(fileInfo.Extension))
            {
                Wallpaper? wallpaper = Wallpaper.From(file);
                if (wallpaper == null)
                    continue;

                yield return wallpaper;
            }
        }
    }

    //获取屏幕信息
    public static Screen[] GetScreens()
    {
        return Screen.AllScreens;
    }

    //显示壁纸
    public static void ShowWallpaper(Playlist playList, uint screenIndex = 0)
    {
    }

    //关闭壁纸
    public static void CloseWallpaper(uint screenIndex = 0)
    {
    }

    //删除壁纸
    public static void DeleteWallpaper(params Wallpaper[] wallpapers)
    {
    }

    //下载壁纸
    public static void DownloadWallpaper(string saveDirectory, Wallpaper wallpapers, Playlist? toPlaylist)
    {
    }

    #endregion

    #region private methods
    private static bool IsSupportedFile(string fileExtension)
    {
        var lowerCaseExtension = fileExtension.ToLower();
        return SupportedImageFormats.Contains(lowerCaseExtension) ||
               SupportedVideoFormats.Contains(lowerCaseExtension) ||
               SupportedApplicationFormats.Contains(lowerCaseExtension) ||
               SupportedWebFormats.Contains(lowerCaseExtension);
    }

    #endregion

    #region internal methods

    //暂停壁纸
    static void PauseWallpaper(uint screenIndex = 0)
    {
    }

    //恢复壁纸
    static void ResumeWallpaper(uint screenIndex = 0)
    {
    }
    #endregion

}
