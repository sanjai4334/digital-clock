import "./SevenSegmentDigit.scss";

const segmentMap: Record<string, string[]> = {
    "0": ["A", "B", "C", "D", "E", "F"],
    "1": ["B", "C"],
    "2": ["A", "B", "D", "E", "G"],
    "3": ["A", "B", "C", "D", "G"],
    "4": ["B", "C", "F", "G"],
    "5": ["A", "C", "D", "F", "G"],
    "6": ["A", "C", "D", "E", "F", "G"],
    "7": ["A", "B", "C"],
    "8": ["A", "B", "C", "D", "E", "F", "G"],
    "9": ["A", "B", "C", "D", "F", "G"]
};

const SevenSegmentDigit = ({ num }: { num: string }) => {
    return (
        <>
            <div className="ssd">
                {["A", "B", "C", "D", "E", "F", "G"].map(
                    (segment: string, index: number) => {
                        return (
                            <div
                                key={index}
                                className={`ssd__segment ssd__segment--${segment} ${
                                    segmentMap[num]?.includes(segment)
                                        ? "ssd__segment--on"
                                        : "ssd__segment--off"
                                }`}
                            ></div>
                        );
                    }
                )}
            </div>
        </>
    );
};

export default SevenSegmentDigit;
