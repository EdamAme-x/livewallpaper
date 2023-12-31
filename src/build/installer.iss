; Script generated by the Inno Setup Script Wizard.
; SEE THE DOCUMENTATION FOR DETAILS ON CREATING INNO SETUP SCRIPT FILES!

#define MyAppVersion GetFileVersion(".\publish\LiveWallpaper3.exe")
#define ProductName "LiveWallpaper"
#define ProductVersionName "LiveWallpaper3"
#define MyAppPublisher "Giantapp Studio"
#define MyAppURL "https://www.giantapp.cn"
#define MyAppExeName "LiveWallpaper3.exe"
#define ProductNameEn="Live Wallpaper 3"
#define ProductNameZh="巨应壁纸3"
#define OutputDir=".\dist"

[Setup]
; NOTE: The value of AppId uniquely identifies this application. Do not use the same AppId value in installers for other applications.
; (To generate a new GUID, click Tools | Generate GUID inside the IDE.)
AppId={{59D77B88-6E82-422B-897B-D4B522C491B7}
AppName={cm:AppName}
AppVersion={#MyAppVersion}
AppVerName={#ProductName} v{#MyAppVersion}
VersionInfoVersion={#MyAppVersion}
AppPublisher={#MyAppPublisher}
AppPublisherURL={#MyAppURL}
AppSupportURL={#MyAppURL}
AppUpdatesURL={#MyAppURL}
DefaultDirName={autopf}\{#ProductVersionName}
DisableProgramGroupPage=yes
; Remove the following line to run in administrative install mode (install for all users.)
PrivilegesRequired=lowest
OutputDir={#OutputDir}
OutputBaseFilename={#ProductName}_Installer_v{#MyAppVersion}
VersionInfoDescription={#ProductName} Installer v{#MyAppVersion}
VersionInfoProductName={#ProductName} Installer v{#MyAppVersion}
SetupIconFile=..\giantapp-wallpaper-client\Client\Assets\Img\logo.ico
Compression=lzma
SolidCompression=yes
WizardStyle=modern
UninstallDisplayIcon={app}\{#MyAppExeName}

[Languages]
Name: "english"; MessagesFile: "compiler:Default.isl"
Name: "chinesesimplified"; MessagesFile: "compiler:Languages\ChineseSimplified.isl"

[CustomMessages]
english.AppName={#ProductNameEn}
chinesesimplified.AppName={#ProductNameZh}

[Tasks]
Name: "desktopicon"; Description: "{cm:CreateDesktopIcon}"; GroupDescription: "{cm:AdditionalIcons}";

[Files]
Source: "publish\{#MyAppExeName}"; DestDir: "{app}"; Flags: ignoreversion
Source: "publish\*"; DestDir: "{app}"; Flags: ignoreversion recursesubdirs createallsubdirs
; NOTE: Don't use "Flags: ignoreversion" on any shared system files

[Icons]
Name: "{autoprograms}\{cm:AppName}"; Filename: "{app}\{#MyAppExeName}"
Name: "{autodesktop}\{cm:AppName}"; Filename: "{app}\{#MyAppExeName}"; Tasks: desktopicon

[Run]
Filename: "{app}\{#MyAppExeName}"; Description: "{cm:LaunchProgram,{#StringChange(ProductName, '&', '&&')}}"; Flags: nowait postinstall skipifsilent

[UninstallRun]
Filename: "{cmd}"; Parameters: "/C ""taskkill /im {#MyAppExeName} /f /t" ; RunOnceId: "killprocss";
