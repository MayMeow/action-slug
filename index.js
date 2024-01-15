const core = require('@actions/core');
const github = require('@actions/github');
const { slugify } = require('@themaymeow/transliterator');

try {
    let text = core.getInput('text');
    let slug = slugify(text);

    console.log(`Text: ${text}`);
    console.log(`Slug: ${slug}`);

    core.setOutput("slug", slug);
} catch (error) {
    core.setFailed(error.message);
}
