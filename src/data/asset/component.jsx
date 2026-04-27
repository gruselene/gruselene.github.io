// 组件类

// 无组件
export const noComponent = {
  className: ''
};

// alienis 组件（使用 alienis 图像）
export const alienisComponent = {
  className: 'flex items-center justify-center my-0',
  children: (
    <div className="w-full flex items-center">
      <div className="flex-grow h-px bg-gradient-to-r from-transparent via-gold-700 to-transparent"></div>
      <div className="mx-4">
        <div className="ornate-divider">
          <div className="ornate-symbol"></div>
        </div>
      </div>
      <div className="flex-grow h-px bg-gradient-to-r from-transparent via-gold-700 to-transparent"></div>
    </div>
  )
};

// 简单线组件
export const lineComponent = {
  className: 'h-px bg-mystic-800 my-6'
};

// 金色线组件
export const goldLineComponent = {
  className: 'h-px bg-gradient-to-r from-transparent via-gold-600 to-transparent my-6'
};

// 下划线组件
export const underlineComponent = {
  className: 'border-b border-mystic-800 my-4'
};

// 金色下划线组件
export const goldUnderlineComponent = {
  className: 'border-b border-gold-600/50 my-4'
};

// 虚线组件
export const dashedComponent = {
  className: 'border-b border-dashed border-mystic-600 my-4'
};
