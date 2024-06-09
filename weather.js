console.log("no-error");
let apikey = "68568b145e6d3451b2d919246b359f1d"
let url = "https://api.openweathermap.org/data/2.5/weather?units=metric&appid=";

const input = document.querySelector("#input");
let btn = document.querySelector("button")
let temp = document.querySelector("#temp");
let place = document.querySelector("#place");
let humidity = document.querySelector("#humidity");
let windspeed = document.querySelector("#windspeed");
let searched = input.value;

btn.addEventListener("click", function(){
    console.log(input.value)
    if(input.value === ""){
        alert("You must enter a place...")
    }else{
        getwheather();
    }
});



input.addEventListener("keydown", (event) =>{
    if(event.key === "Enter"){
        if(input.value === ""){
            alert("You must enter a place...")
        }else{
            getwheather();
        }
        
    }
});

// need to solve image changing comditions 

const getwheather = async ()=>{
    let promise = await fetch(url + apikey + "&q=" + input.value);
    let result = await promise.json();
    console.log(result.weather[0].main);
    if(promise.status === 404){
        document.querySelector("#error-text").style.display="block";
    }else{
        temp.innerText = Math.round(result.main.temp) + "°C";
        place.innerText = result.name;
        humidity.innerText = result.main.humidity + "%";
        windspeed.innerText = result.wind.speed + "km/h";
        // console.log(result);
        input.value = "";
        if(result.weather[0].main == "clouds"){
            image.removeAttribute("src");
            image.setAttribute("src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAQBJREFUaN7t2csNwyAMBmBGYYSMwhgdgxEYjRW6ARu4HNyqB0CKednElf5b2/hLSALGAICRHKMABSjgUMDdD7xfLifkxByoJOJ33O3/nwHIhVgsKDWKriXhb+0WQD6wJxZegvhlADzrcUDhpeFlpwLyAa5BZ711Na4pgAXFNxFdABw2K4r/R9iRgLiw+N89MQSATxvYFN8F2DB0qkOJCggbi/8m9AASA0AiAXBuA0ziKIDACBAogMgIECkAYBUFKEABzwOIf4yKf5HJnkqIn8wxmk775y5oxC8pj1jUH9FWEd/YOqK1eERz94j2euFqUCF7NzjYbzHpLqUCFKCAJfkAq7RimK7qUtAAAAAASUVORK5CYII=");
        }else if(result.weather[0].main === "Haze"){
            image.removeAttribute("src");
            image.setAttribute("src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAVVJREFUaN7tmckNgzAQRV1CSqAEl+ASKIFjjpTgEiiBElICJeTKjXRAB5MZyUgOyoKNx8hkLL1LNv6D8RoFAKpklAiIgAiIgAiIwMsLGxs8rjXSI3cE3nB379cqYdstgIEsMn8I/Qn6vD1UAAMYZAoMvoa+r7ML4EWbncHXNNkEGMLvkggSYAy/ULMJ4I9XEZ0VIjp3xSVwYw6/cEsu4EYcyIhOLdBnFuhTC3DXPs3SgzeLD3TdcRw1Yj10sABz+VBgsxrpLgSG7RB4Qxcq0DKGp6AtMnsBB3e34QttiIBlEjAuPEQwhQh0HHff1fgcKQBHCtCA0GCIKja8/yToKeYsoaXuzYY6D6HL1YlpWGwSBvfR3MPo7rr/geWeyHonYJkw3EsJqxjafyzmil9On2JDU/yW8hSb+lMcq5ziYCvB0eJ0+NFiMYe78v+ACIiACIiACJTEEyDCTi8sMWUSAAAAAElFTkSuQmCC")
        }
        document.querySelector("#error-text").style.display="none";

    }    
};







