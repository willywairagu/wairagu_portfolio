from django.db import models
from django.utils import timezone
from ckeditor_uploader.fields import RichTextUploadingField

class Blogpost(models.Model):
    title = models.CharField(max_length=200)
    content = RichTextUploadingField()
    created_at = models.DateTimeField(default=timezone.now, blank=True)
    updated_at = models.DateTimeField(auto_now=True)
    featured_image = models.ImageField(upload_to='blog_images/', blank=True, null=True)

    def __str__(self):
        return self.title