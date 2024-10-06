import { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@mui/material";
import { PlayCircle, CheckCircle, Ban } from "lucide-react";

const quizData = [
  {
    question: "What NASA satellite monitors sea level rise?",
    options: ["Hubble Space Telescope", "Jason-3", "Voyager 1", "Kepler"],
    correctAnswer: "Jason-3",
  },
  {
    question:
      "Which gas is most responsible for the Earth's greenhouse effect?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Methane"],
    correctAnswer: "Carbon Dioxide",
  },
  {
    question: "What is the purpose of NASA's 'Operation IceBridge' mission?",
    options: [
      "Study the Martian ice caps",
      "Monitor ice changes in polar regions on Earth",
      "Search for ice on the moon",
      "Investigate the ice giants Uranus and Neptune",
    ],
    correctAnswer: "Monitor ice changes in polar regions on Earth",
  },
  {
    question:
      "What is the name of the NASA program studying the Earth's radiation budget?",
    options: ["CERES", "ERBE", "CLARREO", "AIRS"],
    correctAnswer: "CERES",
  },
  {
    question:
      "Which NASA mission is set to study the impact of climate change on phytoplankton?",
    options: ["PACE", "CALIPSO", "Aqua", "Terra"],
    correctAnswer: "PACE",
  },
  {
    question: "What is the largest ocean on Earth?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean",
    ],
    correctAnswer: "Pacific Ocean",
  },
];

export default function Quiz() {
  const [isStarted, setIsStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleStart = () => {
    setIsStarted(true);
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  const handleSubmit = () => {
    if (selectedAnswer === quizData[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer("");
    } else {
      setShowResult(true);
    }
  };

  const handleClose = () => {
    setIsStarted(false);
    setShowResult(false);
  };

  return (
    <section
      className="container mx-auto px-4 py-20 h-12 w-full font-inter"
      id="quiz"
    >
      <h2 className="text-3xl font-bold mb-6 text-center text-white">
        Take a quize and Win a free Cap!
      </h2>
      <div className="flex justify-center">
        <Button
          variant="contained"
          color="primary"
          size="large"
          startIcon={<PlayCircle />}
          onClick={handleStart}
        >
          Start Quiz
        </Button>
      </div>

      <Dialog
        open={isStarted}
        onClose={handleClose}
        aria-labelledby="quiz-dialog-title"
        fullWidth={true}
        maxWidth="md"
      >
        <DialogTitle id="quiz-dialog-title">
          {!showResult
            ? `Question ${currentQuestion + 1} of ${quizData.length}`
            : "Quiz Results"}
        </DialogTitle>
        <DialogContent>
          {!showResult ? (
            <>
              <DialogContentText>
                {quizData[currentQuestion].question}
              </DialogContentText>
              <FormControl component="fieldset" className="mt-4">
                <DialogContentText>Choose your answer:</DialogContentText>
                <RadioGroup
                  aria-label="quiz-options"
                  name="quiz-options"
                  value={selectedAnswer}
                  onChange={(e) => setSelectedAnswer(e.target.value)}
                >
                  {quizData[currentQuestion].options.map((option, index) => (
                    <FormControlLabel
                      key={index}
                      value={option}
                      control={<Radio />}
                      label={option}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </>
          ) : (
            <>
              <DialogContentText>
                You scored {score} out of {quizData.length}
              </DialogContentText>
              <div className="flex justify-center items-center space-x-2 mt-4">
                {score === quizData.length ? (
                  <CheckCircle className="w-8 h-8 text-green-500" />
                ) : (
                  <Ban className="w-8 h-8 text-red-500" />
                )}
                <span className="text-2xl font-bold">
                  {score === quizData.length ? "Perfect Score!" : "Good Try!"}
                </span>
              </div>
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleSubmit}
            disabled={!selectedAnswer}
            variant="contained"
            color="primary"
          >
            {currentQuestion === quizData.length - 1 ? "Finish" : "Next"}
          </Button>
        </DialogActions>
      </Dialog>
    </section>
  );
}
