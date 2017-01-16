import React from 'react';
import SelectCategory from './SelectCategory';
import InputAmount from './InputAmount';
import InputDescription from './InputDescription';
import Button from './form/Button';

const AddAmountForm = ({
    selectedCategory,
    handleChangeCategory,
    categories,
    amount,
    handleChangeAmount,
    description,
    handleChangeDescription,
    canAddAmount,
    handleAddSpendingClick,
    handleKeyUp
  }) => {
  return(
    <div className="form-inline">
      <SelectCategory
        selectedCategory={selectedCategory}
        handleChange={handleChangeCategory}
        categories={categories}
      />
      <InputAmount
        amount={amount}
        handleChange={handleChangeAmount}
        handleKeyUp={handleKeyUp}
      />
      <InputDescription
        description={description}
        handleChange={handleChangeDescription}
        handleKeyUp={handleKeyUp}
      />
      <Button
        disabled={!canAddAmount}
        handleClick={handleAddSpendingClick}
        type="btn-primary"
      >
        Add
      </Button>
    </div>
  );
};

export default AddAmountForm;
