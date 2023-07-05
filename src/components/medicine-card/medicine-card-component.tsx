import { MainCardComponent } from "../main-card/main-card-component";
import { MedicineCard, MedicineList, Medicine, MedicineTitle } from "./medicine-card-styles";
import { DividerComponent } from "../divider/divider-component";

export const MedicineCardComponent = () => {
  return (
    <MedicineCard>
      <MainCardComponent>
        <h3>Medicamentos</h3>
        <MedicineList>
          <Medicine>
            <MedicineTitle>
              <span>Remedio 1 dlskjfald ff alksdjfasl dkfj</span>
            </MedicineTitle>
            <DividerComponent color="var(--orange-color)" />
            <div>
              <p>3 comprimidos</p>
              <p>8/8 horas</p>
            </div>
          </Medicine>
          <Medicine>
            <MedicineTitle>
              <span>Remedio 1 dlskjfald ff alksdjfasl dkfj</span>
            </MedicineTitle>
            <DividerComponent color="var(--orange-color)" />
            <div>
              <p>3 comprimidos</p>
              <p>8/8 horas</p>
            </div>
          </Medicine>
          <Medicine>
            <MedicineTitle>
              <span>Remedio 1 dlskjfald ff alksdjfasl dkfj</span>
            </MedicineTitle>
            <DividerComponent color="var(--orange-color)" />
            <div>
              <p>3 comprimidos</p>
              <p>8/8 horas</p>
            </div>
          </Medicine>
          <Medicine>
            <MedicineTitle>
              <span>Remedio 1 dlskjfald ff alksdjfasl dkfj</span>
            </MedicineTitle>
            <DividerComponent color="var(--orange-color)" />
            <div>
              <p>3 comprimidos</p>
              <p>8/8 horas</p>
            </div>
          </Medicine>
          <Medicine>
            <MedicineTitle>
              <span>Remedio 1 dlskjfald ff alksdjfasl dkfj</span>
            </MedicineTitle>
            <DividerComponent color="var(--orange-color)" />
            <div>
              <p>3 comprimidos</p>
              <p>8/8 horas</p>
            </div>
          </Medicine>
        </MedicineList>
      </MainCardComponent>
    </MedicineCard>
  );
};
