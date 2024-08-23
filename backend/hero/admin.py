from django.contrib import admin
from .models import Hero
from .forms import HeroForm

class HeroAdmin(admin.ModelAdmin):
    form = HeroForm
    list_display = ('id', 'title', 'subtitle')
    list_display_links = ('id', 'title')
    search_fields = ('title', 'subtitle')
    list_per_page = 20

admin.site.register(Hero, HeroAdmin)