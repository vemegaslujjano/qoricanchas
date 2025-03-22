import style from "./../css/main.scss";
import { initPaginator } from "./paginator";
import { SketchGallery } from "./sketchesLoader";
import LegendaryCursor from "legendary-cursor";
import { sketches } from "./sketches";
import { paintings } from "./paintings";
import { dom } from "./DOMreferences";

initPaginator();
new SketchGallery(sketches, dom.SketchesContainer, dom.SketchesPaginator, "#graphics_sketches_header");
new SketchGallery(paintings, dom.PaintingsContainer, dom.PaintingsPaginator, "#paintings_sketches_header");
LegendaryCursor.init();

window.addEventListener("load", () => {

    LegendaryCursor.init({
        lineSize:         0.15,
        opacityDecrement: 0.55,
        speedExpFactor:   0.8,
        lineExpFactor:    0.6,
        sparklesCount:    205,
        maxOpacity:       0.09,  // should be a number between [0 ... 1]
        // texture1:         "http://path_to_texture",      // texture displayed on mouse hover
        // texture2:         "http://path_to_texture",      // texture displayed on mouse click
        // texture3:         "http://path_to_texture",      // texture displayed on sparkles
    });

});