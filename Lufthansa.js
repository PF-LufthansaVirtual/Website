var document

document.addEventListener("DOMContentLoaded", function() {
    var open = false
    
    function updateArrow() {
        if(!open) {
            document.getElementById('arrow').textContent = "►";
        } else {
            document.getElementById('arrow').textContent = "◄";
        }
    }
    
    updateArrow()
    
    document.querySelector('.language-select').addEventListener('click', function() {
        open = !open;
        updateArrow();
        
        if(open) {
            document.querySelector('.lang-select').style.transform = "translateX(0)";
        } else {
            document.querySelector('.lang-select').style.transform = "translateX(-100%)";
        }
        
        document.querySelector('.lang-select').style.transition = "transform 0.1s ease";
    });
    
    
    var openfaq = false
    var openfaq2 = false
    
    function updateArrowfaq(arrow, openfaqs) {
        if(!openfaqs) {
            document.getElementById(`${arrow}`).textContent = "▼";
        } else {
            document.getElementById(`${arrow}`).textContent = "▲";
        }
    }
    
    updateArrowfaq("arrowfaq", openfaq)
    updateArrowfaq("arrowfaq2", openfaq2)
    
    function faqdisplay(faq, arrow, openfaqs) {
        if(`${faq}` === "faqpilot") {
            openfaq = !openfaq;
            openfaqs = openfaq;
        } else if(`${faq}` === "faqstart") {
            openfaq2 = !openfaq2;
            openfaqs = openfaq2;
        }
        
        updateArrowfaq(`${arrow}`, openfaqs);

        if(openfaqs) {
            document.querySelector(`.${faq}2`).style.display = "block";
        } else {
            document.querySelector(`.${faq}2`).style.display = "none";
        }
    }
    
    document.querySelector('.faqpilot').addEventListener('click', function() {
        faqdisplay("faqpilot", "arrowfaq", openfaq);
    });
    
    document.querySelector('.faqstart').addEventListener('click', function() {
        faqdisplay("faqstart", "arrowfaq2", openfaq2);
    });
    
    
    let openimg = null;
    
    function imageresize(image) {
        if (!openimg) {
            document.getElementById(`${image}`).style.display = "block"
            openimg = image;
        } else if(openimg !== image){
            document.getElementById(`${openimg}`).style.display = "none"
            
            document.getElementById(`${image}`).style.display = "block"
            openimg = image;
        } else if(openimg === image) {
            document.getElementById(`${openimg}`).style.display = "none"
            openimg = null
        }
    }
    
    document.querySelector('.Route1 img').addEventListener('click', function() {
        imageresize("Route1-2");
    });
    document.getElementById('Route1-2').addEventListener('click', function() {
        imageresize("Route1-2");
    });
    
    
    document.querySelector('.Route2 img').addEventListener('click', function() {
        imageresize("Route2-2");
    });
    document.getElementById('Route2-2').addEventListener('click', function() {
        imageresize("Route2-2");
    });
    
    
    document.querySelector('.Route3 img').addEventListener('click', function() {
        imageresize("Route3-2");
    });
    document.getElementById('Route3-2').addEventListener('click', function() {
        imageresize("Route3-2");
    });
    
    
    document.querySelector('.Route4 img').addEventListener('click', function() {
        imageresize("Route4-2");
    });
    document.getElementById('Route4-2').addEventListener('click', function() {
        imageresize("Route4-2");
    });
    
    
    document.querySelector('.Route5 img').addEventListener('click', function() {
        imageresize("Route5-2");
    });
    document.getElementById('Route5-2').addEventListener('click', function() {
        imageresize("Route5-2");
    });
    
    
    document.querySelector('.Route6 img').addEventListener('click', function() {
        imageresize("Route6-2");
    });
    document.getElementById('Route6-2').addEventListener('click', function() {
        imageresize("Route6-2");
    });
    
    
    document.querySelector('.Route7 img').addEventListener('click', function() {
        imageresize("Route7-2");
    });
    document.getElementById('Route7-2').addEventListener('click', function() {
        imageresize("Route7-2");
    });
    
    
    document.querySelector('.Route8 img').addEventListener('click', function() {
        imageresize("Route8-2");
    });
    document.getElementById('Route8-2').addEventListener('click', function() {
        imageresize("Route8-2");
    });
    
    
    document.querySelector('.Route9 img').addEventListener('click', function() {
        imageresize("Route9-2");
    });
    document.getElementById('Route9-2').addEventListener('click', function() {
        imageresize("Route9-2");
    });
    
    
    document.querySelector('.Route10 img').addEventListener('click', function() {
        imageresize("Route10-2");
    });
    document.getElementById('Route10-2').addEventListener('click', function() {
        imageresize("Route10-2");
    });
    
    
    document.querySelector('.Route11 img').addEventListener('click', function() {
        imageresize("Route11-2");
    });
    document.getElementById('Route11-2').addEventListener('click', function() {
        imageresize("Route11-2");
    });
    
    
    document.querySelector('.Route12 img').addEventListener('click', function() {
        imageresize("Route12-2");
    });
    document.getElementById('Route12-2').addEventListener('click', function() {
        imageresize("Route12-2");
    });
    
    
    document.querySelector('.Route13 img').addEventListener('click', function() {
        imageresize("Route13-2");
    });
    document.getElementById('Route13-2').addEventListener('click', function() {
        imageresize("Route13-2");
    });
    
    
    document.querySelector('.Route14 img').addEventListener('click', function() {
        imageresize("Route14-2");
    });
    document.getElementById('Route14-2').addEventListener('click', function() {
        imageresize("Route14-2");
    });
    
    
    document.querySelector('.Route15 img').addEventListener('click', function() {
        imageresize("Route15-2");
    });
    document.getElementById('Route15-2').addEventListener('click', function() {
        imageresize("Route15-2");
    });
    
    
    document.querySelector('.Route16 img').addEventListener('click', function() {
        imageresize("Route16-2");
    });
    document.getElementById('Route16-2').addEventListener('click', function() {
        imageresize("Route16-2");
    });
    
    
    document.querySelector('.Route17 img').addEventListener('click', function() {
        imageresize("Route17-2");
    });
    document.getElementById('Route17-2').addEventListener('click', function() {
        imageresize("Route17-2");
    });
    
    
    document.querySelector('.Route18 img').addEventListener('click', function() {
        imageresize("Route18-2");
    });
    document.getElementById('Route18-2').addEventListener('click', function() {
        imageresize("Route18-2");
    });
    
    
    document.querySelector('.Route19 img').addEventListener('click', function() {
        imageresize("Route19-2");
    });
    document.getElementById('Route19-2').addEventListener('click', function() {
        imageresize("Route19-2");
    });
    
    
    document.querySelector('.Route20 img').addEventListener('click', function() {
        imageresize("Route20-2");
    });
    document.getElementById('Route20-2').addEventListener('click', function() {
        imageresize("Route20-2");
    });
    
    
    document.querySelector('.Route21 img').addEventListener('click', function() {
        imageresize("Route21-2");
    });
    document.getElementById('Route21-2').addEventListener('click', function() {
        imageresize("Route21-2");
    });
    
    
    document.querySelector('.Route22 img').addEventListener('click', function() {
        imageresize("Route22-2");
    });
    document.getElementById('Route22-2').addEventListener('click', function() {
        imageresize("Route22-2");
    });
    
    
    document.querySelector('.Route23 img').addEventListener('click', function() {
        imageresize("Route23-2");
    });
    document.getElementById('Route23-2').addEventListener('click', function() {
        imageresize("Route23-2");
    });
    
    
    document.querySelector('.Route24 img').addEventListener('click', function() {
        imageresize("Route24-2");
    });
    document.getElementById('Route24-2').addEventListener('click', function() {
        imageresize("Route24-2");
    });
    
    
    document.querySelector('.Route25 img').addEventListener('click', function() {
        imageresize("Route25-2");
    });
    document.getElementById('Route25-2').addEventListener('click', function() {
        imageresize("Route25-2");
    });
    
    
    document.querySelector('.Route26 img').addEventListener('click', function() {
        imageresize("Route26-2");
    });
    document.getElementById('Route26-2').addEventListener('click', function() {
        imageresize("Route26-2");
    });
    
    
    document.querySelector('.Route27 img').addEventListener('click', function() {
        imageresize("Route27-2");
    });
    document.getElementById('Route27-2').addEventListener('click', function() {
        imageresize("Route27-2");
    });
    
    
    document.querySelector('.Route28 img').addEventListener('click', function() {
        imageresize("Route28-2");
    });
    document.getElementById('Route28-2').addEventListener('click', function() {
        imageresize("Route28-2");
    });
    
    
    document.querySelector('.Route29 img').addEventListener('click', function() {
        imageresize("Route29-2");
    });
    document.getElementById('Route29-2').addEventListener('click', function() {
        imageresize("Route29-2");
    });
    
    
    document.querySelector('.Route30 img').addEventListener('click', function() {
        imageresize("Route30-2");
    });
    document.getElementById('Route30-2').addEventListener('click', function() {
        imageresize("Route30-2");
    });
    
    
    document.querySelector('.Route31 img').addEventListener('click', function() {
        imageresize("Route31-2");
    });
    document.getElementById('Route31-2').addEventListener('click', function() {
        imageresize("Route31-2");
    });
    
    
    document.querySelector('.Route32 img').addEventListener('click', function() {
        imageresize("Route32-2");
    });
    document.getElementById('Route32-2').addEventListener('click', function() {
        imageresize("Route32-2");
    });
    
    
    document.querySelector('.Route33 img').addEventListener('click', function() {
        imageresize("Route33-2");
    });
    document.getElementById('Route33-2').addEventListener('click', function() {
        imageresize("Route33-2");
    });
    
    
    document.querySelector('.Route34 img').addEventListener('click', function() {
        imageresize("Route34-2");
    });
    document.getElementById('Route34-2').addEventListener('click', function() {
        imageresize("Route34-2");
    });
    
    
    document.querySelector('.Route35 img').addEventListener('click', function() {
        imageresize("Route35-2");
    });
    document.getElementById('Route35-2').addEventListener('click', function() {
        imageresize("Route35-2");
    });
    
    
    document.querySelector('.Route36 img').addEventListener('click', function() {
        imageresize("Route36-2");
    });
    document.getElementById('Route36-2').addEventListener('click', function() {
        imageresize("Route36-2");
    });
    
    
    document.querySelector('.Route37 img').addEventListener('click', function() {
        imageresize("Route37-2");
    });
    document.getElementById('Route37-2').addEventListener('click', function() {
        imageresize("Route37-2");
    });
    
    
    document.querySelector('.Route38 img').addEventListener('click', function() {
        imageresize("Route38-2");
    });
    document.getElementById('Route38-2').addEventListener('click', function() {
        imageresize("Route38-2");
    });
});
