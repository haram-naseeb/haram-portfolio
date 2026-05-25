"""
Crop portrait to focus on face and upper body
Maintains original quality by using lossless PNG
"""

from PIL import Image
import os
from pathlib import Path

def crop_portrait_tight():
    """Crop image to focus on face and shoulders"""
    
    project_root = Path(__file__).parent
    input_path = project_root / 'public' / 'Haram-original.png'
    output_path = project_root / 'public' / 'Haram.png'
    
    if not input_path.exists():
        print(f"❌ Error: Backup image not found at {input_path}")
        return
    
    print("📷 Loading image...")
    img = Image.open(input_path)
    print(f"   Original size: {img.width}x{img.height}")
    
    width, height = img.size
    
    # Crop to focus on face and upper body
    # Center the crop horizontally, focus on top 70% vertically (removing bottom 12%)
    left = int(width * 0.1)      # 10% from left
    right = int(width * 0.9)     # 10% from right
    top = 0                        # Start from top
    bottom = int(height * 0.68)   # Crop bottom 32% (includes original 20% + additional 12%)
    
    print(f"✂️  Cropping to: left={left}, top={top}, right={right}, bottom={bottom}")
    
    cropped = img.crop((left, top, right, bottom))
    print(f"   Cropped size: {cropped.width}x{cropped.height}")
    
    # Save optimized PNG (lossless)
    print("💾 Saving optimized image...")
    cropped.save(output_path, 'PNG', optimize=True)
    
    file_size_kb = os.path.getsize(output_path) / 1024
    print(f"✅ Done! File size: {file_size_kb:.1f} KB")
    print(f"📍 Saved to: {output_path}")

if __name__ == '__main__':
    crop_portrait_tight()
