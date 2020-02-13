from rest_framework import routers
from .api import OfficerViewSet

router = routers.DefaultRouter()
router.register('api/officers', OfficerViewSet, 'officers')

urlpatterns = router.urls