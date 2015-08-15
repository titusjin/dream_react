/**
	Index page MainBanner componenet
*/
var React = require('react');
var MainBannerStore = require('../../stores/MainBannerStore');

var stopCaoursel;
var firstval = 0;
var containterWidth;

var Carousel = function() {
    // speed setting for carousel : by making the carousel moving to left
    firstval += 20;
    parent = document.getElementById('MainbannerPicContainer');
    parent.style.left = "-" + firstval + "px";
    
    // Check if the carousel is done the moving
    if (!(firstval % containterWidth)) {
    	//this timeout value 1000 can be reduced if u want the carousel more quick
        setTimeout(Carousel, 2000);
		firstval = 0;
        
        // Make the passing pic element not be displayed
        var firstChild = parent.firstElementChild;
        firstChild.style.display = 'none';
        // Make the left 'a link' moving with the carousel
        var currentBanner = $("#MainBanner").find('p.area-page').find('a.current');
        currentBanner.removeClass('current');
        if(currentBanner.attr('data-ref').indexOf('2') != -1){
        	currentBanner.prev().prev().addClass('current');
        }else{
        	currentBanner.next().addClass('current');	
        }

        parent.appendChild(firstChild);
        var currentFist = parent.firstElementChild;
        currentFist.style.display = 'block';

        // Carousel restart
        parent.style.left= 0;
        return;
    }

	stopCaoursel = setTimeout(Carousel, 80);
}


var MainBanner = React.createClass({
	getInitialState: function() {
    	return MainBannerStore.getFreshData();
  	},
	
	componentDidMount: function() {
		containterWidth = document.getElementById('MainbannerPicContainer').offsetWidth;
		Carousel();
	},

	componentWillUnmount: function() {  
		clearTimeout(stopCaoursel);
	},
	
	_onChange: function() {
	},

	handleClick : function(e){
		e.preventDefault();
		var triggerNode = $(e.target);
		var currentBanner = $("#MainBanner").find('p.area-page').find('a.current');

		if(triggerNode.attr('class') && triggerNode.attr('class').indexOf('current') != -1){
			return;
		}else{
			// change the classNmae of a element
			triggerNode.addClass('current');
			currentBanner.removeClass('current');

			// chaneg the data property 'show'
			this.state.data[parseInt(triggerNode.attr('data-ref'),10)].show = 'true';
			this.state.data[parseInt(currentBanner.attr('data-ref'),10)].show = 'false';

			// update the state and trigger render
			this.setState(this.state.data);

			// stop the carousel
			clearTimeout(stopCaoursel);
		}
	},

	render: function(){
		var dreamPhotoNodes = this.state.data.map(function (src) {
			if(src.show == "true"){
				return (
      				<div className="photo" key={src.id}>
        				<img src={src.pic} href={src.url} />
        			</div>
        		)
			}else{
				return(
					<div className="photo" key={src.id} style={{display: 'none'}}> 
        				<img src={src.pic} href={src.url} />
        			</div>
				)
      		}
    	});

	 	return (
			<div className="cp-mainBanner" id="MainBanner">
                <div className="fa-com">
                    <article>
                        <h1>夢想"公投"</h1>
                        <p>新創點子需要你的支持才能進行募集，你可以投他們一票，或提供實質的建議！</p>
                        <p className="area-btn">
                        	<a className="btn-yel" href="#">投票支持</a>
                        </p>
                        <p className="area-page">
                        	<a className="current" onClick={this.handleClick} data-ref="0"></a>
                        	<a onClick={this.handleClick} data-ref="1"></a>
                        	<a onClick={this.handleClick} data-ref="2"></a>
                        </p>
                    </article>
                   	<div id="MainBannerWrapper" className="MainBannerWrapperStyle">
	                    <div id="MainbannerPicContainer" className="MainbannerPicContainerStyle">
	                    	{dreamPhotoNodes}
	                   	</div>
                   	</div>
                </div>
            </div>
	   	);
	}
});

module.exports = MainBanner;
