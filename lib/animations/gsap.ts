"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

// Register plugins exactly once. Importing this module anywhere ensures useGSAP is available.
gsap.registerPlugin(useGSAP);

export { gsap, useGSAP };
