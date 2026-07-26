Add-Type -AssemblyName System.Drawing

$img2 = [System.Drawing.Image]::FromFile("d:\景深之外官网\official-website\public\images\2.jpg")
$w2 = [math]::Round($img2.Width / 4)
$h2 = [math]::Round($img2.Height / 4)
$bmp2 = New-Object System.Drawing.Bitmap($w2, $h2)
$g2 = [System.Drawing.Graphics]::FromImage($bmp2)
$g2.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g2.DrawImage($img2, 0, 0, $w2, $h2)
$bmp2.Save("d:\景深之外官网\official-website\public\images\sample-2.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)
$g2.Dispose()
$bmp2.Dispose()
$img2.Dispose()

$img3 = [System.Drawing.Image]::FromFile("d:\景深之外官网\official-website\public\images\3.jpg")
$w3 = [math]::Round($img3.Width / 4)
$h3 = [math]::Round($img3.Height / 4)
$bmp3 = New-Object System.Drawing.Bitmap($w3, $h3)
$g3 = [System.Drawing.Graphics]::FromImage($bmp3)
$g3.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g3.DrawImage($img3, 0, 0, $w3, $h3)
$bmp3.Save("d:\景深之外官网\official-website\public\images\sample-3.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)
$g3.Dispose()
$bmp3.Dispose()
$img3.Dispose()
