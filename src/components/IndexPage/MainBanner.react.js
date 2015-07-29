/**
	Index page MainBanner componenet
*/
var React = require('react');
var MainBannerStore = require('../../stores/MainBannerStore');

var MainBanner = React.createClass({
	getInitialState: function() {
    	return MainBannerStore.getInitialData('MainBannerModel');
  	},
	
	componentDidMount: function() {
	},

	componentWillUnmount: function() {  	
	},
	
	_onChange: function() {
	},

	handleClick : function(e){
		e.preventDefault();
		var triggerNode = $(e.target);
		var currentBanner = $("#MainBanner,p.area-page,a.current");

		if(triggerNode.attr('class') && triggerNode.attr('class').indexOf('current') != -1){
			return;
		}else{
			// trigger link elemlent add current 
			triggerNode.addClass('current');
			currentBanner.removeClass('current');

			currentBanner.show();
		}
	},

	render: function(){
		var dreamPhotoNodes = this.state.data.map(function (src) {
			if(src.id == "1"){
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
                        	<a className="current" onClick={this.handleClick} ref="bannerPic1"></a>
                        	<a onClick={this.handleClick} ref="bannerPic2"></a>
                        	<a onClick={this.handleClick} ref="bannerPic3"></a>
                        </p>
                    </article>
                    {dreamPhotoNodes}
                </div>
            </div>
	   	);
	}
});

module.exports = MainBanner;
