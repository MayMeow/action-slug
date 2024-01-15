const core = require('@actions/core');
const github = require('@actions/github');

try {
    const text = core.getInput('text');
    const slug = text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');

    console.log(`Text: ${text}`);
    console.log(`Slug: ${slug}`);

    core.setOutput("slug", slug);

} catch (error) {
    core.setFailed(error.message);
}
