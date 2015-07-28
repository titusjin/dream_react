/**
    This is footer component
*/

var React = require('react');

var UniversalFooter = React.createClass({
    getInitialState: function() {
        return {};
    },
    
    componentDidMount: function() {
        
    },

    componentWillUnmount: function() {
        
    },
    
    _onChange: function() {
    },

    render: function() {
        return (
            <footer>
                <div className="fa-com">
                    <div className="area-btn">
                        <a href="#">關於我們</a>
                        <a href="#">使用條款</a>
                        <a href="#">常見問答</a>
                        <a href="#">聯絡我們</a>
                        <span className="lang">
                            LANGUAGE
                            <a href="#" className="in-lang">
                                繁中<em className="icon-arrIn"></em>
                                <ul>
                                    <li>繁中</li>
                                    <li>簡中</li>
                                    <li>英文</li>
                                </ul>
                            </a>
                        </span>
                    </div>
                    <div className="copyright">
                        <a href="#"><em className="icon-fb"></em>夢想搖籃</a>
                        <span>© 2015 104 Coporation All Rights Reserved.</span>
                    </div>
                </div>
            </footer>
        );
    }
});

module.exports = UniversalFooter;
