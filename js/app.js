var dummyText = [
    "Liquorice sugar plum gummi bears icing bonbon sesame snaps bonbon carrot cake jelly. Ice cream topping lollipop chupa chups liquorice. Lollipop halvah soufflé lollipop jelly beans candy canes jelly-o sweet. Halvah caramels bear claw muffin oat cake gummi bears tiramisu candy caramels. Bonbon sesame snaps toffee macaroon bear claw lollipop. Gummi bears cookie croissant marzipan jelly dragée topping. Tootsie roll donut marshmallow tart macaroon soufflé. Caramels halvah cookie pie lemon drops gummies muffin. Muffin chocolate icing croissant macaroon lemon drops cookie candy. Sweet roll toffee topping icing fruitcake macaroon tiramisu cake pie.",

    "Marshmallow danish lemon drops toffee danish tart brownie marshmallow marshmallow. Lollipop jelly-o chocolate biscuit apple pie tootsie roll sugar plum apple pie tiramisu. Candy canes cheesecake danish sweet roll candy canes danish jelly. Candy jelly-o pastry sweet sweet chocolate bar jelly beans tart toffee. Jelly topping sweet roll shortbread ice cream croissant jujubes bear claw. Cake jelly gummies dragée tart. Liquorice wafer danish jelly-o chupa chups topping soufflé. Toffee shortbread jujubes cotton candy danish pastry.",

    "Sweet gummies sesame snaps cheesecake oat cake sweet dessert donut croissant. Jelly tart apple pie fruitcake macaroon. Pastry biscuit fruitcake halvah pudding croissant chocolate halvah biscuit. Jelly gummies pie ice cream donut. Chocolate cake macaroon marshmallow chupa chups liquorice. Soufflé cookie toffee jelly-o candy chocolate cake chocolate bar sweet roll powder. Candy candy sesame snaps gummies icing caramels jelly. Fruitcake ice cream liquorice soufflé apple pie pie jelly brownie.",

    "Tootsie roll wafer muffin apple pie tart candy. Candy canes pie biscuit jujubes chocolate cake carrot cake jelly beans gingerbread apple pie. Candy canes ice cream cake candy cupcake jelly beans candy sugar plum candy canes. Brownie chocolate apple pie jelly-o oat cake macaroon chupa chups. Jelly croissant chocolate bar brownie fruitcake tootsie roll pudding shortbread. Candy canes candy canes icing lemon drops sweet roll jujubes. Muffin toffee chocolate icing chocolate cupcake cookie.",

    "Ice cream soufflé muffin candy canes pastry. Gummies candy canes liquorice jelly-o caramels fruitcake. Sugar plum macaroon croissant cake sweet roll chocolate cake. Croissant sesame snaps candy croissant cheesecake candy cheesecake candy canes gingerbread. Halvah macaroon powder ice cream shortbread muffin chupa chups. Croissant wafer cupcake pastry ice cream fruitcake shortbread jujubes. Danish gummi bears gummies cake topping. Lollipop icing biscuit brownie tiramisu chocolate bar.",

    "Gingerbread bear claw tootsie roll chupa chups dessert candy canes sugar plum cake. Cheesecake oat cake icing liquorice marzipan jelly dragée. Danish danish cotton candy dragée cupcake ice cream sweet roll. Pie cheesecake icing candy canes bonbon halvah candy canes. Caramels ice cream carrot cake dessert brownie dragée muffin. Ice cream donut sesame snaps jelly beans jelly beans cake fruitcake donut powder. Icing gingerbread brownie topping brownie. Pastry sweet roll jelly beans carrot cake jelly jelly croissant. Marshmallow macaroon cake powder sweet roll sesame snaps. Lollipop dragée soufflé lemon drops apple pie candy candy.",

    "Chocolate cake dragée dessert fruitcake jelly-o oat cake lollipop. Powder macaroon cheesecake candy cotton candy muffin oat cake. Powder carrot cake soufflé jujubes chupa chups tootsie roll caramels. Ice cream toffee tootsie roll candy ice cream chocolate cake jelly soufflé. Lollipop bonbon cheesecake bonbon dessert. Icing shortbread chocolate cake gummi bears icing pudding brownie oat cake brownie. Pie bear claw cupcake croissant chocolate bar tart lollipop. Gingerbread sweet roll soufflé lollipop topping jelly. Jelly-o chupa chups liquorice chupa chups lemon drops bear claw cake tart gummi bears.",

    "Donut jelly-o jelly gingerbread cake bear claw pudding. Marzipan topping liquorice apple pie jelly cotton candy tootsie roll sugar plum. Powder chocolate liquorice cheesecake candy bear claw apple pie donut gummi bears. Sweet roll sesame snaps cake brownie sugar plum muffin topping. Dragée oat cake fruitcake jujubes marzipan tart tart cotton candy gummies. Sugar plum candy canes sesame snaps sesame snaps sweet roll danish apple pie. Chocolate bar bear claw pastry sweet cupcake. Powder ice cream bonbon icing caramels jelly-o chocolate cake chocolate bar gummies.",

    "Candy canes cake brownie toffee cotton candy. Cheesecake apple pie bear claw tart biscuit tiramisu pudding sesame snaps. Chocolate liquorice jujubes chocolate pastry tart cupcake pie carrot cake. Cake sesame snaps donut toffee chupa chups chocolate bar. Bonbon carrot cake toffee cake marshmallow chocolate cupcake. Carrot cake jelly-o tootsie roll icing shortbread croissant. Danish sugar plum ice cream icing ice cream shortbread. Topping toffee cake croissant macaroon tiramisu marzipan cupcake. Powder macaroon jelly beans jelly biscuit. Jelly gummi bears soufflé cotton candy apple pie donut tootsie roll bear claw."
];
var inputBox = document.querySelector('#inputBox')
var submit = document.querySelector('#submit');
var form = document.querySelector('#form');
var result = document.querySelector('.result')

form.addEventListener('submit', function(e){
    e.preventDefault();

    var value = parseInt(inputBox.value);
    const rand = Math.floor(Math.random() * dummyText.length);

    //for empty, negative greater than 9
    if(isNaN(value) || value <= 0 || value > 9){
        result.innerHTML = dummyText[rand];
    }else{
        const slicedArry = dummyText.slice(0, value);
        const finalArray = slicedArry.map( (singleDummy) =>{
            return `<p> ${singleDummy} </p>`
        } ).join('');

        //display dummmy data 
        result.innerHTML = finalArray;
        var copyBtn = ` <button class="btn btn-warning" onclick="CopyToClipboard('texts')">Copy Text</button>`;
        document.querySelector('.copy').appendChild(copyBtn);
        
    }
});

//copy to clip board
function CopyToClipboard(containerId){
    if(document.selection){
        var range = document.body.createTextRange();
        range.moveToElementText(document.getElementById(containerId));
        range.select().createTextRange();
        document.execCommand("copy");
    }else if(window.getSelection){
        var range = document.createRange();
        range.selectNode(document.getElementById(containerId));
        window.getSelection().addRange(range);
        document.execCommand("copy");
    }
}