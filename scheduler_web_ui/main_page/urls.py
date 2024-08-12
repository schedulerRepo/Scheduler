from django.urls import path
from .views import login_view, main_view

urlpatterns = [
            path('', login_view, name='login'),
    path('main_page/', main_view, name='main_page'),]


