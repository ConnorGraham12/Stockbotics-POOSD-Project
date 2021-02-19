import React from "react";

const LandingPage = () => {

    return (
        <div className="Landing">
            <div className="Landing-header">What is StockBotics?</div>
            <p className="Landing-p">
                Stockbotics is a mock trading platform that allows the user to test his/her
                investment acumen without risking any money. It is an educational tool meant
                especially for new investors, but can also be used by experienced traders. Using
                real market data, the user can make simulated trades, allowing him/her to learn
                the market and track the potential growth of his/her mock portfolio with no risk
                at all. Unlike other trading platforms such as RobinHood or Fidelity,
                Stockbotics is totally secure because there's no money and no brokerage
                involved, so there's no need to give us your sensitive banking information. This
                also means that there's never any consequences for a bad trade. With
                Stockbotics, the user is free to make mistakes and take risks, building his/her
                market knowledge so that when he/she is ready to invest for real, he/she invests
                with confidence.
            </p>
        </div>
    );
}

export default LandingPage;