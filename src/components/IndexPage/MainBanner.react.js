/**
	Index page MainBanner componenet
*/
var React = require('react');
var MainBannerStore = require('../../stores/MainBannerStore');

var stopCaoursel;
var firstval = 0;
var Carousel = function() {
    firstval += 20;
    parent = document.getElementById('MainbannerPicContainer');
    parent.style.left = "-" + firstval + "px";
    
    if (!(firstval % 900)) {
    	//this timeout value 1000 can be reduced if u want the carousel more quick
        setTimeout(Carousel, 1000);

        firstval = 0;
        var firstChild = parent.firstElementChild;
        parent.appendChild(firstChild);
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
		Carousel();
	},

	componentWillUnmount: function() {  	
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
