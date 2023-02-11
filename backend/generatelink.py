from serpapi import GoogleSearch


def get_shopping_results(query):
    params = {
        'api_key': 'f33e20cfd1766cd67920b392ad1d3062da91fd8db3e49b95efb82a60e2949201',
        'engine': 'google_shopping',
        'q': query
    }

    search = GoogleSearch(params)
    results = search.get_dict()
    # print(results)
    if not results:
        return []
    return results['shopping_results']


# res = get_shopping_results('EcoShape  bottle of water (0.5 L)')
# print(res)