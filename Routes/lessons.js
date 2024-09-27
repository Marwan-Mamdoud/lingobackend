import { Router } from "express";
import {
  createChallenge,
  createChallengeProgress,
  createLesson,
  createOption,
  getCahllengeProgress,
  getChallenge,
  getChallenges,
  getLesson,
  getUnitLessonswithStatus,
  updatae,
  updateChallengeProgress,
} from "../Controllers/Lessons.js";

const router = Router();

// LESSONS
router.post("/create-lesson", createLesson);

router.get("/get-unit-lessons/:id", getUnitLessonswithStatus);

router.get("/get-lesson/:id", getLesson);

// CHALLENGE
router.post("/create-challenge", createChallenge);

router.get("/get-challenges/:id", getChallenges);

router.put("/updadat-challenge/:id", updatae);

router.get("/get-challenge/:id", getChallenge);

//CHALLENGE OPTIONS
router.post("/create-option", createOption);

//CHALLENGE PROGRESS
router.get(
  "/get-challenge-progress/:userId/:challengeId",
  getCahllengeProgress
);

router.post("/create-challenge-progress", createChallengeProgress);

router.put(
  "/update-challenge-progress/:userid/:challengeId",
  updateChallengeProgress
);
export default router;
