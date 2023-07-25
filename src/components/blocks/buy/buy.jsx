import { useState } from "react";
import Form from "../../styled/form/form";
import Label from "../../styled/label/label";
import Button from "../../ui/button/button";
import { StyledTitle } from "../cafeGallery/styles";
import {
  AccordionText,
  FormItem,
  Price,
  RadioLabelForTime,
  RadioLabelForType,
  StyledSection
} from "./styles";
import { TitleSize } from "/src/components/ui/title/title";
import { Ul, Li } from "/src/components/styled";
import RadioButton from "../../ui/radio-button/radion-button";
import Accordion from "../../ui/accordion/accordion";

export default function Buy({ buyOptions }) {
  const { durationOptions, ticketOptions } = buyOptions;
  const [duration, setDuration] = useState(durationOptions[0]);
  const [selectType, setSelectType] = useState(ticketOptions[0].id);
  const canBuy = durationOptions.length && ticketOptions.length;
  const accordionContent =
    canBuy &&
    ticketOptions.map((option) => ({
      id: option.id,
      title: (
        <RadioButton
          labelComponent={RadioLabelForType}
          selectValue={selectType}
          value={option.id}
          text={option.title}
          onChange={(el) => {
            setSelectType(Number(el.target.value));
          }}
        />
      ),
      description: option.description
    }));
  const type = ticketOptions.find((option) => option.id === selectType);
  const price = duration * type.price;
  const handlerBuy = () => {
    alert(
      `Спасибо за покупку.
              Вы приобрели билет класса: ${type.title}.
              Продолжительность посещения(часов): ${duration}.
              Цена билета: ${price} руб.`
    );
  };

  return (
    <StyledSection>
      <StyledTitle level={1} size={TitleSize.BIG}>
        Купить билет
      </StyledTitle>
      {canBuy ? (
        <Form $width={540}>
          <FormItem>
            <Label margin={12}>Продолжительность (часов)</Label>
            <Ul $isGridList $indent={12} $align="left">
              {durationOptions.map((option) => (
                <Li key={option}>
                  <RadioButton
                    labelComponent={RadioLabelForTime}
                    selectValue={duration}
                    value={option}
                    text={option}
                    onChange={(el) => {
                      setDuration(Number(el.target.value));
                    }}
                  />
                </Li>
              ))}
            </Ul>
          </FormItem>
          <FormItem $bottom={22}>
            <Label $margin={12}>Тип билета</Label>
            <Accordion
              textComponent={AccordionText}
              content={accordionContent}
              isHtml
            />
          </FormItem>
          <Label $small $margin={6}>
            Цена
          </Label>
          <Price>{price} руб.</Price>
          <Button minWidth={460} onClick={handlerBuy}>
            Купить билет
          </Button>
        </Form>
      ) : (
        <p>Покупка билетов временно недоступна</p>
      )}
    </StyledSection>
  );
}
