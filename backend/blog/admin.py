from django.contrib import admin
from .models import Blogpost

@admin.register(Blogpost)
class BlogpostAdmin(admin.ModelAdmin):
    list_display = ('title', 'created_at', 'updated_at')
    search_fields = ('title', 'content')
    list_filter = ('created_at', 'updated_at')