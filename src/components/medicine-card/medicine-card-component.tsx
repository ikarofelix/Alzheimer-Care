import { MainCardComponent } from "../main-card/main-card-component";
import { MedicineCard, MedicineList, Medicine, MedicineName } from "./medicine-card-styles";
import { DividerComponent } from "../divider/divider-component";
import { currentUserSelector } from "../../redux/user/user-slice";
import { useAppSelector } from "../../redux/hooks";

export const MedicineCardComponent = () => {
  const { medicine_card } = useAppSelector(currentUserSelector);

  return (
    <MedicineCard>
      <MainCardComponent>
        <h3>Medicamentos</h3>
        <MedicineList>
          {medicine_card && medicine_card.length ? (
            medicine_card.slice(0, 4).map((item) => {
              return (
                <Medicine key={medicine_card.indexOf(item)}>
                  <MedicineName>
                    <span>{item.name}</span>
                  </MedicineName>
                  <DividerComponent color="var(--orange-color)" />
                  <div>
                    <p>{item.quantity.toString()} comprimidos</p>
                    <p>
                      {item.time_interval.toString()}/{item.time_interval.toString()} horas
                    </p>
                  </div>
                </Medicine>
              );
            })
          ) : (
            <p>Você não possui medicamento</p>
          )}
        </MedicineList>
      </MainCardComponent>
    </MedicineCard>
  );
};
