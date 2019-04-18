from rest_framework.response import Response

class CustomListModelMixin(object):
    """
    List a queryset.
    """
    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())

        # If filter and name are included in the query string of the url then filter the results according to name value
        if request.GET.get('filter') == 'true' and request.GET.get('name'):
            queryset = queryset.filter(name__icontains=request.GET.get('name'))

        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)