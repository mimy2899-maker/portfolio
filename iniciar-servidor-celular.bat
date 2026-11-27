@echo off
title Servidor Local para Celular - Yasmim Soares Portfolio
cd /d "%~dp0"
echo ========================================================
echo   PORTFOLIO YASMIM SOARES - SERVIDOR PARA CELULAR
echo ========================================================
echo.
echo No seu celular conectado no mesmo Wi-Fi, acesse:
echo http://192.168.15.12:8080/
echo.
echo Pressione Ctrl + C para fechar este servidor quando terminar.
echo ========================================================
powershell -NoProfile -ExecutionPolicy Bypass -Command "$port=8080; $listener = New-Object System.Net.HttpListener; $listener.Prefixes.Add('http://*:' + $port + '/'); $listener.Start(); Write-Host 'Servidor pronto em http://192.168.15.12:'$port; while($listener.IsListening){ $ctx = $listener.GetContext(); $req = $ctx.Request; $res = $ctx.Response; $path = $req.Url.LocalPath.TrimStart('/'); if([string]::IsNullOrEmpty($path)){ $path = 'index.html' }; $full = Join-Path (Get-Location) $path; if(Test-Path $full -PathType Leaf){ $bytes = [System.IO.File]::ReadAllBytes($full); $ext = [System.IO.Path]::GetExtension($full).ToLower(); $ct = 'text/plain'; switch($ext){ '.html'{$ct='text/html; charset=utf-8'} '.css'{$ct='text/css'} '.js'{$ct='application/javascript'} '.jpg'{$ct='image/jpeg'} '.jpeg'{$ct='image/jpeg'} '.png'{$ct='image/png'} '.svg'{$ct='image/svg+xml'} }; $res.ContentType = $ct; $res.ContentLength64 = $bytes.Length; $res.OutputStream.Write($bytes, 0, $bytes.Length); $res.Close(); } else { $res.StatusCode = 404; $res.Close(); } }"
pause
