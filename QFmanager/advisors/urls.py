from rest_framework import routers
from .api import AdvisorViewSet

router = routers.DefaultRouter()
router.register('api/advisors', AdvisorViewSet, 'advisors')

urlpatterns = router.urls