export default async function mockFetch(url) {
    switch (url) {
        case "./About.md": {
            return {
                ok: true,
                status: 200,
                text: async () => 'About markdown content',
            };
        }
        default: {
            throw new Error(`Unhandled request: ${url}`);
        }
    }
}