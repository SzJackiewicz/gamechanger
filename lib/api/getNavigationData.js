import {performRequest} from "@/lib/datocms";

const PAGE_CONTENT_QUERY = `
  query Home {
    allCategoryNavs {
        label
        name
        slug
        subMenu {
          label
          name
          slug
        }
    }
  }`;

function getPageRequest() {
    const { isEnabled } = false

    return { query: PAGE_CONTENT_QUERY, includeDrafts: isEnabled, variables: { } };
}

export async function getNavigationData() {
    try {
        console.log('KAKKAKAKAKAKKAKAK')
        console.log('KAKKAKAKAKAKKAKAK')
        console.log('KAKKAKAKAKAKKAKAK')
        console.log('KAKKAKAKAKAKKAKAK')
        const pageRequest = getPageRequest();
        const data = await performRequest(pageRequest);

        return {
            navigationData: data.allCategoryNavs,
        };
    } catch (error) {
        console.error('Error fetching navigation data:', error);
        return {
            navigationData: [],
        };
    }
}