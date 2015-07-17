/**
 * Created by turner on 6/23/15.
 */
function letsGo() {

    var id = "scarpa",
        selectionCriteria,
        drag,
        bodySelection,
        s;

    drag = d3.behavior.drag()
        .origin(Object)
        .on("drag", function(d){

            d.x = d3.event.x;
            d.y = d3.event.y;

            d3.select(this)
                .style("left", function(datum) {
                    return datum.x + "px";
                })
                .style( "top", function(datum) {
                    return datum.y + "px";
                });

        });


    bodySelection = d3
        .select("body");

    selectionCriteria = 'div[' + 'id=' + '"' + id + '"' + ']' + '.draggable';

    bodySelection
        .selectAll(selectionCriteria)
        .data([{ x: 128, y: 128 }])
        .enter()
        .append("div")
        .attr("id", id)
        .classed("draggable", true)
        .style("left", function(d) {
            return d.x + "px";
        })
        .style( "top", function(d) {
            return d.y + "px";
        })
        .call(drag);

    s = bodySelection.selectAll(selectionCriteria);

    console.log("yo");



}