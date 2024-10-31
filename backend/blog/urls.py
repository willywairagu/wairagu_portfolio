from django.urls import path
from .views import BlogPostListView, BlogPostDetailView

urlpatterns = [
    path('', BlogPostListView.as_view()),
    path('<int:pk>/', BlogPostDetailView.as_view())
]