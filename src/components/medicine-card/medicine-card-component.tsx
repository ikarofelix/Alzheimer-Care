import { DividerComponent } from "../divider/divider-component";
import { MedicineCard, MedicineList, Medicine, MedicineTitle } from "./medicine-card-styles";

export const MedicineCardComponent = () => {
  return (
    <MedicineCard>
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
    </MedicineCard>
  );
};
