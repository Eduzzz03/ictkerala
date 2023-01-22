let noOfCharac = 150;
let contents = document.querySelectorAll(".content");
contents.forEach(contents => {
    //if text length is less than that noOfCharac.... then hide the read more button 
    if(content.textContent.length < noOfCharac){
        contents.nextElementSibling.style.display = "none";
    }
    else{
        let displayText = content.textContent.slice (0, noOfCharac);
        let moreText = content.textContent.slice (noOfCharac);
        content.innerHTML = '${displayText}<span class="dots">...</span><span class="hidemore">${moreText}</span>';
    }
});

function readMore(btn){
    let post = btn.parentElement;
    post.querySelector(".dots").classList.toggle ("hide");
    post.querySelector(".more").classList.toggle ("hide");
    btn.textContent == "Read More" ? btn.textContent = "Read Less" : btn.textContent = "Read More";
}