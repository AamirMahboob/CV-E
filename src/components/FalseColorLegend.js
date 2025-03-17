"use client";

export default function FalseColorLegend({ active }) {
    if (!active) return null;

    return (
        <div className="falseColorLegend">
            <div className="legendTitle">False Color Scale</div>
            <div className="legendRow"><div className="legendColor blue"></div> <span>Shadows</span></div>
            <div className="legendRow"><div className="legendColor cyan"></div> <span>Dark Tones</span></div>
            <div className="legendRow"><div className="legendColor green"></div> <span>Midtones</span></div>
            <div className="legendRow"><div className="legendColor yellow"></div> <span>Highlights</span></div>
            <div className="legendRow"><div className="legendColor orange"></div> <span>Hot Highlights</span></div>
            <div className="legendRow"><div className="legendColor red"></div> <span>Overexposed</span></div>
        </div>
    );
}
