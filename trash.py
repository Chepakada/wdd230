from PIL import Image
image = Image.open("images/temple_image.webp")
image = image.resize((960,720))
image.save("images/temple_larger.webp", quality = 80)