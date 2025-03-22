var posts = [
    { imgPath: "images/projects/experiment1.jpg",  link: "images/projects/experiment1.jpg", description: "", tags: ["webgl", "threejs"] },
    
    { imgPath: "images/projects/c2-renderer.jpg",  link: "images/projects/c2-renderer.jpg", description: "", tags: ["webgpu", "threejs"] },
    { imgPath: "images/projects/recursive.jpg",  link: "images/projects/recursive.jpg", description: "", tags: ["webgl", "threejs"] },
    { imgPath: "images/projects/ssgi-2.jpg",  link: "images/projects/ssgi-2.jpg", description: "", tags: ["threejs", "webgl"] },
    { imgPath: "images/projects/ssr2.jpg",  link: "images/projects/ssr2.jpg", description: "", tags: ["webgl", "threejs"] },
    { imgPath: "images/projects/lumen2d.jpg",  link: "images/projects/lumen2d.jpg", description: "", tags: ["geometry", "misc"] },
    { imgPath: "images/projects/ssrefractiondepthpeeling.jpg",  link: "images/projects/ssrefractiondepthpeeling.jpg", description: "", tags: ["webgl", "threejs"] },
    { imgPath: "images/projects/caustics.jpg",  link: "images/projects/caustics.jpg", description: "", tags: ["webgl"] },
    { imgPath: "images/projects/frontend2.jpg",  link: "images/projects/frontend2.jpg", description: "", tags: ["threejs", "misc"] },
    { imgPath: "images/projects/rtptcornellbox.jpg",  link: "images/projects/rtptcornellbox.jpg", description: "", tags: ["threejs", "webgl"] },
    { imgPath: "images/projects/volumetricart.png",  link: "images/projects/volumetricart.png", description: "", tags: ["webgl"] },
    { imgPath: "images/projects/blurryspider.jpg",  link: "images/projects/blurryspider.jpg", description: "", tags: ["webgl", "threejs"] },
    { imgPath: "images/projects/doflines.jpg",  link: "images/projects/doflines.jpg", description: "", tags: ["webgl", "threejs"] },
    { imgPath: "images/projects/ssgi.jpg",  link: "images/projects/ssgi.jpg", description: "", tags: ["threejs", "webgl"] },

    { imgPath: "images/projects/thematrix.jpg",  link: "images/projects/thematrix.jpg", description: "", tags: ["webgl"] },
    { imgPath: "images/projects/doflinesrenderer2.jpg",  link: "images/projects/doflinesrenderer2.jpg", description: "", tags: ["webgl", "threejs"] },
    { imgPath: "images/projects/gpu-fluid-sim.jpg",  link: "images/projects/gpu-fluid-sim.jpg", description: "", tags: ["webgl", "threejs"] },

    { imgPath: "images/projects/circle-packing-mm.jpg",  link: "images/projects/circle-packing-mm.jpg", description: "", tags: ["webgl", "threejs", "geometry"] },
    { imgPath: "images/projects/phys-fluid-sim.jpg",  link: "images/projects/phys-fluid-sim.jpg", description: "", tags: ["webgl", "threejs"] },
    { imgPath: "images/projects/webglheader.jpg",  link: "images/projects/webglheader.jpg", description: "", tags: ["webgl"] },
    { imgPath: "images/projects/wolfheader.jpg",  link: "images/projects/wolfheader.jpg", description: "", tags: ["threejs"] },
    { imgPath: "images/projects/doflinesrenderer.jpg",  link: "images/projects/doflinesrenderer.jpg", description: "", tags: ["threejs", "geometry"] },
    { imgPath: "images/projects/sidescroller.jpg",  link: "", description: "", tags: ["webgl"] },

    { imgPath: "images/projects/ssr.png",  link: "", description: "", tags: ["webgl"] },
    { imgPath: "images/projects/glassabsorption.jpg",  link: "", description: "", tags: ["threejs"] },

    { imgPath: "images/projects/flyingsimulator.jpg",  link: "", description: "", tags: ["webgl"] },
    { imgPath: "images/projects/legendarycursor.jpg",  link: "", description: "", tags: ["webgl", "threejs"] },
    { imgPath: "images/projects/2dsoftshadows.jpg",  link: "", description: "", tags: ["webgl", "geometry"] },
    { imgPath: "images/projects/marchingcubes.jpg",  link: "", description: "", tags: ["webgl", "geometry"] },
    
   


];


var selectedPosts = posts;


function onTagChange(activeTag) {
    selectedPosts = [];

    if (activeTag == "all") {
        // safe to do since selectedPosts is currently read-only
        selectedPosts = posts;
        return;
    }

    for (var i = 0; i < posts.length; i++)
        if(posts[i].tags.includes(activeTag))
            selectedPosts.push(posts[i]);
}


export { onTagChange, selectedPosts };