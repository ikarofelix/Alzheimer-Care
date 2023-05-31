import "./App.css";

import { MainCardComponent } from "./components/main-card/main-card-component";
import { PersonalInfoCardComponent } from "./components/personal-info-card/personal-info-card-component";

function App() {
  return (
    <main>
      <MainCardComponent>
        <PersonalInfoCardComponent />
      </MainCardComponent>
    </main>
  );
}

export default App;
