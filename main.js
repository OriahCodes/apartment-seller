$("button").on("click", function () {
    let address = $("#addr-input").val()
    let minPrice = $("#min-p-input").val()
    let maxPrice = $("#max-p-input").val()
    let minRooms = $("#min-r-input").val()
    let maxRooms = $("#max-r-input").val()
    let immediate = $("#immed-y")
    let parking = $("#park-y")

    let relevantApts = findRelevantApts(address, minPrice, maxPrice, minRooms, maxRooms, immediate, parking)
    renderApts(relevantApts)
})

const source = $("#results-template").html()
const template = Handlebars.compile(source)

const renderApts = function (apartments) {
    $("#results").empty()
    console.log(apartments) //array of apartments to render

    let relevantResults = template({apartments})
    $("#results").append(relevantResults)

    if (apartments.length === 0) { 
        $("#no-results").append(`<div class="no-match"> There are no matching results, sorry </div>`)
    }
    
}

renderApts(apartments) //renders apartments when page loads