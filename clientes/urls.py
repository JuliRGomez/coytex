from rest_framework.routers import DefaultRouter

from clientes.views import ClientesViewSet

router = DefaultRouter()
router.register(r'clientes', ClientesViewSet)

urlpatterns = router.urls
