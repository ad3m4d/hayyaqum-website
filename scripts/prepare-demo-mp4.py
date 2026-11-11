"""Generate Safari-compatible delivery files alongside the original WebMs.
Run from the website directory: python3 scripts/prepare-demo-mp4.py
Requires ffmpeg with libx264. public/videos remains separately deployed media.
"""
from pathlib import Path
import subprocess

videos = Path(__file__).resolve().parent.parent / 'public/videos'
for source in sorted(videos.glob('*.webm')):
    target = source.with_suffix('.mp4')
    if target.exists() and target.stat().st_mtime >= source.stat().st_mtime:
        continue
    subprocess.run([
        'ffmpeg', '-v', 'error', '-y', '-i', str(source),
        '-map', '0:v:0', '-an', '-c:v', 'libx264', '-preset', 'medium',
        '-crf', '18', '-profile:v', 'main', '-pix_fmt', 'yuv420p',
        '-movflags', '+faststart', str(target),
    ], check=True)
    print(f'Generated {target.name}', flush=True)
