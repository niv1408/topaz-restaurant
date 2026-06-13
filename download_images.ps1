# PowerShell script to download high-resolution local images from Unsplash
$imagesDir = Join-Path $PSScriptRoot "public/images"
if (-not (Test-Path $imagesDir)) {
    New-Item -ItemType Directory -Path $imagesDir -Force
}

$images = @{
    "hero_dining.jpg" = "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80"
    "hero_banquet.jpg" = "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80"
    "hero_ambience.jpg" = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
    "about_ambience.jpg" = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
    "about_food.jpg" = "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80"
    "paneer_tikka.jpg" = "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=500&q=80"
    "dal_makhani.jpg" = "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=500&q=80"
    "manchurian.jpg" = "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=500&q=80"
    "chili_paneer.jpg" = "https://images.unsplash.com/photo-1624462966581-bc6d768cbce5?auto=format&fit=crop&w=500&q=80"
    "risotto.jpg" = "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=500&q=80"
    "pizza.jpg" = "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=500&q=80"
    "lasagna.jpg" = "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=500&q=80"
    "paneer_steak.jpg" = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=500&q=80"
    "royal_thali.jpg" = "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=500&q=80"
    "gujarati_thali.jpg" = "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=500&q=80"
    "kulfi.jpg" = "https://images.unsplash.com/photo-1505394033343-40a7900728c3?auto=format&fit=crop&w=500&q=80"
    "lava_cake.jpg" = "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=500&q=80"
    "cucumber_cooler.jpg" = "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=500&q=80"
    "mango_lassi.jpg" = "https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?auto=format&fit=crop&w=500&q=80"
    "event_wedding.jpg" = "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80"
    "event_engagement.jpg" = "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=800&q=80"
    "event_birthday.jpg" = "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80"
    "event_corporate.jpg" = "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80"
    "event_family.jpg" = "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=800&q=80"
    "gallery_1.jpg" = "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80"
    "gallery_2.jpg" = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80"
    "gallery_3.jpg" = "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=600&q=80"
    "gallery_4.jpg" = "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80"
    "gallery_5.jpg" = "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=600&q=80"
    "gallery_6.jpg" = "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=600&q=80"
    "gallery_7.jpg" = "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=600&q=80"
    "gallery_8.jpg" = "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=600&q=80"
    "user_1.jpg" = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
    "user_2.jpg" = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
    "user_3.jpg" = "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
}

foreach ($name in $images.Keys) {
    $targetPath = Join-Path $imagesDir $name
    $url = $images[$name]
    Write-Host "Downloading $name from Unsplash..."
    try {
        Invoke-WebRequest -Uri $url -OutFile $targetPath -ErrorAction Stop
        Write-Host "Success: $name downloaded."
    } catch {
        Write-Warning "Failed to download $name. Error: $_"
    }
}
Write-Host "All assets downloaded successfully!"
