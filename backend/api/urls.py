# from django.urls import path
# from .views import home


# urlpatterns = [
#     path('', home, name='home'),
# ]
from django.urls import path, include
from . import views  # ✅ Import views correctly
from rest_framework.routers import DefaultRouter
from .views import RegisterViewSet, home , LoginViewSet, ContactMessageViewSet




router = DefaultRouter()
router.register("register", RegisterViewSet, basename="register")
router.register("login", LoginViewSet, basename="login")
router.register("contact", ContactMessageViewSet, basename="contact-message")

urlpatterns = [
    path("", views.home, name="home"),  # ✅ Ensure `home` view exists in `views.py`
    path("api/", include(router.urls)),
    
]
