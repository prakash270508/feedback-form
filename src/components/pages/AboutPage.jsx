import React from "react";
import { Link } from "react-router-dom";
import Card from "../shared/Card";

export default function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About this page</h1>
        <p>This is a react app for feedback of our sevices</p>
        <p>Version:1.0.0</p>
        <p>
          <Link to={"/"}>Back to home</Link>
        </p>
      </div>
    </Card>
  );
}
