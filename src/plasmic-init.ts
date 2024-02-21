import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
export const PLASMIC = initPlasmicLoader({
    projects: [
        {
            id: "mj312XiRcQXVFVDbNwkQoc",  // ID of a project you are using
            token: "TS6QneT1YjagWWlHlceyamZm8gztNI9b0o5KftACXsWE54kTuWZMrwXO5JCc1fSlHiK7BjfxWmwiuGFdW9ig"  // API token for that project
        }
    ],
    // Fetches the latest revisions, whether or not they were unpublished!
    // Disable for production to ensure you render only published changes.
    preview: true,
})