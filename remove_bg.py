from rembg import remove
from PIL import Image

for name in ['uiux', 'seo', 'fullstack']:
    input_path = f'src/assets/{name}.jpg'
    output_path = f'src/assets/{name}.png'
    input_img = Image.open(input_path)
    output_img = remove(input_img)
    output_img.save(output_path)
