$(()=>{
    $('#prepend').click(()=>{
        //console.log($('#item').val())
        let ctext=$('#item').val()
        //console.log($('#item').val('hi'))
        $('#list').prepend($('li').text(ctext))
    })



})